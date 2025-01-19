import { relations } from "drizzle-orm";
import {
  integer,
  text,
  boolean,
  pgTable,
  varchar,
  uuid,
  timestamp,
} from "drizzle-orm/pg-core";

export const Videos = pgTable("videos", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: varchar("user_id", { length: 50 }).notNull(),
  videoId: text("video_id").notNull(),
  title: text("title").notNull(),
  description: text("description"),
  publishedAt: timestamp("published_at").notNull(),
  thumbnailUrl: text("thumbnail_url"),
  channelId: text("channel_id").notNull(),
  channelTitle: text("channel_title").notNull(),
  viewCount: integer("view_count").default(0),
  likeCount: integer("like_count").default(0),
  dislikeCount: integer("dislike_count").default(0),
  commentCount: integer("comment_count").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const YouTubeChannels = pgTable("youtube_channels", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: varchar("user_id", { length: 50 }).notNull(),
  name: text("name").notNull(),
  channelId: text("channel_id"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const VideoComments = pgTable("video_comments", {
  id: uuid("id").defaultRandom().primaryKey(),
  videoId: uuid("video_id").notNull(),
  userId: varchar("user_id", { length: 50 }).notNull(),
  commentText: text("comment_text").notNull(),
  likeCount: integer("like_count").default(0),
  dislikeCount: integer("dislike_count").default(0),
  publishedAt: timestamp("published_at").notNull(),
  isUsed: boolean("is_used").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const Ideas = pgTable("ideas", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: varchar("user_id", { length: 50 }).notNull(),
  videoId: uuid("video_id")
    .notNull()
    .references(() => Videos.id),
  commentId: uuid("comment_id")
    .notNull()
    .references(() => VideoComments.id),
  score: integer("score").default(0),
  videoTitle: text("video_title").notNull(),
  description: text("description").notNull(),
  research: text("research").array().notNull(), // List of URLs
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const CrewJobs = pgTable("crew_jobs", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: varchar("user_id", { length: 50 }).notNull(),
  kickoffId: text("kickoff_id").notNull(),
  jobState: text("job_state").notNull().default("RUNNING"),
  jobResult: text("job_result"),
  processed: boolean("processed").default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Define relationships
export const VideoRelations = relations(Videos, ({ many }) => ({
  comments: many(VideoComments),
  ideas: many(Ideas),
}));

export const VideoCommentRelations = relations(VideoComments, ({ one }) => ({
  video: one(Videos, {
    fields: [VideoComments.videoId],
    references: [Videos.id],
  }),
}));

export const IdeaRelations = relations(Ideas, ({ one }) => ({
  video: one(Videos, {
    fields: [Ideas.videoId],
    references: [Videos.id],
  }),
  comment: one(VideoComments, {
    fields: [Ideas.commentId],
    references: [VideoComments.id],
  }),
}));

// Types
export type Video = typeof Videos.$inferSelect;
export type InsertVideo = typeof Videos.$inferInsert;
export type YouTubeChannelType = typeof YouTubeChannels.$inferSelect;
export type InsertYouTubeChannel = typeof YouTubeChannels.$inferInsert;
export type VideoComment = typeof VideoComments.$inferSelect;
export type InsertVideoComment = typeof VideoComments.$inferInsert;
export type Idea = typeof Ideas.$inferSelect;
export type InsertIdea = typeof Ideas.$inferInsert;
export type CrewJob = typeof CrewJobs.$inferSelect;
export type InsertCrewJob = typeof CrewJobs.$inferInsert;
