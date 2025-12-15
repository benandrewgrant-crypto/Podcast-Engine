import {
  users,
  subscriptions,
  type User,
  type UpsertUser,
  type Subscription,
  type InsertSubscription,
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  updateUserTrialStatus(userId: string, trialStatus: "not_started" | "active" | "expired", trialStartAt?: Date, trialEndAt?: Date): Promise<User | undefined>;
  getSubscription(userId: string): Promise<Subscription | undefined>;
  getSubscriptionByStripeId(stripeSubscriptionId: string): Promise<Subscription | undefined>;
  createSubscription(subscription: InsertSubscription): Promise<Subscription>;
  updateSubscription(id: string, data: Partial<InsertSubscription>): Promise<Subscription | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          email: userData.email,
          firstName: userData.firstName,
          lastName: userData.lastName,
          profileImageUrl: userData.profileImageUrl,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  async updateUserTrialStatus(
    userId: string,
    trialStatus: "not_started" | "active" | "expired",
    trialStartAt?: Date,
    trialEndAt?: Date
  ): Promise<User | undefined> {
    const updateData: Partial<UpsertUser> = {
      trialStatus,
      updatedAt: new Date(),
    };
    if (trialStartAt) updateData.trialStartAt = trialStartAt;
    if (trialEndAt) updateData.trialEndAt = trialEndAt;
    if (trialStatus === "active") updateData.freeTrialConsumed = true;

    const [user] = await db
      .update(users)
      .set(updateData)
      .where(eq(users.id, userId))
      .returning();
    return user;
  }

  async getSubscription(userId: string): Promise<Subscription | undefined> {
    const [subscription] = await db
      .select()
      .from(subscriptions)
      .where(eq(subscriptions.userId, userId));
    return subscription;
  }

  async getSubscriptionByStripeId(stripeSubscriptionId: string): Promise<Subscription | undefined> {
    const [subscription] = await db
      .select()
      .from(subscriptions)
      .where(eq(subscriptions.stripeSubscriptionId, stripeSubscriptionId));
    return subscription;
  }

  async createSubscription(subscription: InsertSubscription): Promise<Subscription> {
    const [newSubscription] = await db
      .insert(subscriptions)
      .values(subscription)
      .returning();
    return newSubscription;
  }

  async updateSubscription(id: string, data: Partial<InsertSubscription>): Promise<Subscription | undefined> {
    const [subscription] = await db
      .update(subscriptions)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(subscriptions.id, id))
      .returning();
    return subscription;
  }
}

export const storage = new DatabaseStorage();
