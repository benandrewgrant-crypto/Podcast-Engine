import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  await setupAuth(app);

  app.get("/api/auth/user", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  app.post("/api/trial/start", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      if (user.freeTrialConsumed) {
        return res.status(400).json({ message: "Free trial already used" });
      }

      const trialStartAt = new Date();
      const trialEndAt = new Date();
      trialEndAt.setDate(trialEndAt.getDate() + 14);

      const updatedUser = await storage.updateUserTrialStatus(
        userId,
        "active",
        trialStartAt,
        trialEndAt
      );

      res.json({ user: updatedUser, message: "Free trial started successfully" });
    } catch (error) {
      console.error("Error starting trial:", error);
      res.status(500).json({ message: "Failed to start trial" });
    }
  });

  app.get("/api/subscription", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const subscription = await storage.getSubscription(userId);
      res.json(subscription || null);
    } catch (error) {
      console.error("Error fetching subscription:", error);
      res.status(500).json({ message: "Failed to fetch subscription" });
    }
  });

  return httpServer;
}
