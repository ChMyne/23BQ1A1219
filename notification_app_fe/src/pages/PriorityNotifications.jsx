import { useEffect, useState } from "react";
import NotificationCard from "../components/NotificationCard";
import { getTopNotifications } from "../services/notificationService";

function PriorityNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = [
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
      ];

      const result = await getTopNotifications(data);
      setNotifications(result);
    }

    loadData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Priority Notifications</h1>

      {notifications.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
        />
      ))}
    </div>
  );
}

export default PriorityNotifications;