import { useState, useEffect } from "react";
import NotificationCard from "../components/NotificationCard";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setNotifications([
      {
        ID: "1",
        Type: "Placement",
        Message: "CSX Corporation Hiring",
        Timestamp: "2026-04-22 17:51:18",
      },
      {
        ID: "2",
        Type: "Result",
        Message: "Mid Exam Results Published",
        Timestamp: "2026-04-22 17:51:30",
      },
      {
        ID: "3",
        Type: "Event",
        Message: "Farewell Celebration",
        Timestamp: "2026-04-22 17:51:06",
      },
    ]);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Notifications</h1>

      {notifications.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
        />
      ))}
    </div>
  );
}

export default AllNotifications;