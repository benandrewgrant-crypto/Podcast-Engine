import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import { Calendar, CheckCircle, Clock, Crown, User } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

export default function Dashboard() {
  const { toast } = useToast();
  const { user, isAuthenticated, isLoading } = useAuth();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to access the dashboard.",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
    }
  }, [isAuthenticated, isLoading, toast]);

  const startTrialMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/trial/start");
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Trial Started!",
        description: "Your 14-day free trial has begun. Enjoy all premium features!",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/auth/user"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to start trial",
        variant: "destructive",
      });
    },
  });

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-gray-500">Loading...</div>
        </div>
      </Layout>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const getTrialStatusBadge = () => {
    switch (user?.trialStatus) {
      case "active":
        return <Badge className="bg-green-500" data-testid="badge-trial-active"><CheckCircle size={14} className="mr-1" /> Trial Active</Badge>;
      case "expired":
        return <Badge variant="destructive" data-testid="badge-trial-expired"><Clock size={14} className="mr-1" /> Trial Expired</Badge>;
      default:
        return <Badge variant="secondary" data-testid="badge-trial-not-started">No Trial</Badge>;
    }
  };

  const formatDate = (date: Date | string | null | undefined) => {
    if (!date) return "N/A";
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return dateObj.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const daysRemaining = () => {
    if (!user?.trialEndAt || user.trialStatus !== "active") return null;
    const endDate = new Date(user.trialEndAt);
    const now = new Date();
    const diff = Math.ceil((endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-black tracking-tight mb-2" data-testid="text-dashboard-title">Dashboard</h1>
            <p className="text-gray-500">Welcome back, {user?.firstName || user?.email?.split("@")[0] || "User"}!</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card data-testid="card-profile">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User size={20} />
                  Your Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <span className="text-sm text-gray-500">Email</span>
                  <p className="font-medium" data-testid="text-user-email">{user?.email || "Not provided"}</p>
                </div>
                {user?.firstName && (
                  <div>
                    <span className="text-sm text-gray-500">Name</span>
                    <p className="font-medium">{user.firstName} {user.lastName || ""}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card data-testid="card-subscription">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown size={20} />
                  Subscription
                </CardTitle>
                <CardDescription>
                  {getTrialStatusBadge()}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {user?.trialStatus === "active" && (
                  <>
                    <div className="flex items-center gap-2 text-green-600">
                      <Calendar size={16} />
                      <span className="font-medium">{daysRemaining()} days remaining</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Trial ends</span>
                      <p className="font-medium">{formatDate(user.trialEndAt)}</p>
                    </div>
                  </>
                )}

                {user?.trialStatus === "not_started" && !user?.freeTrialConsumed && (
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      You haven't started your free trial yet. Get 14 days of full access to all features!
                    </p>
                    <Button
                      onClick={() => startTrialMutation.mutate()}
                      disabled={startTrialMutation.isPending}
                      className="w-full bg-black hover:bg-gray-800 text-white"
                      data-testid="button-start-trial"
                    >
                      {startTrialMutation.isPending ? "Starting..." : "Start Your Free Trial"}
                    </Button>
                  </div>
                )}

                {(user?.trialStatus === "expired" || user?.freeTrialConsumed) && user?.trialStatus !== "active" && (
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      Your trial has ended. Upgrade to continue using premium features.
                    </p>
                    <Button className="w-full bg-black hover:bg-gray-800 text-white" data-testid="button-upgrade">
                      Upgrade Now
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
