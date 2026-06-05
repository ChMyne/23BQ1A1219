import { Log } from "../logging_middleware/logger";


const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export async function getTopNotifications(
  notifications,
  topN = 10
) {
  try {
    await Log(
      "frontend",
      "info",
      "api",
      `Processing ${notifications.length} notifications`
    );

    const topNotifications = notifications
      .map((notification) => ({
        ...notification,
        score:
          weights[notification.Type] * 1000000000000 +
          new Date(notification.Timestamp).getTime(),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, topN);

    await Log(
      "frontend",
      "info",
      "api",
      `Generated top ${topNotifications.length} notifications`
    );

    return topNotifications;
  } catch (error) {
    await Log(
      "frontend",
      "error",
      "api",
      error.message
    );

    throw error;
  }
}