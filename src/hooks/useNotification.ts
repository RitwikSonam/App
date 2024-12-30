import { useState, useEffect } from 'react';

export function useNotification() {
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(() => {
    return localStorage.getItem('notificationsEnabled') === 'true';
  });

  const requestNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        setIsNotificationEnabled(true);
        localStorage.setItem('notificationsEnabled', 'true');
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      return false;
    }
  };

  const toggleNotification = async () => {
    if (!isNotificationEnabled) {
      const granted = await requestNotificationPermission();
      if (granted) {
        new Notification('NEET 2025 Countdown', {
          body: 'Notifications enabled! You will receive daily study reminders.',
          icon: '/vite.svg'
        });
      }
    } else {
      setIsNotificationEnabled(false);
      localStorage.setItem('notificationsEnabled', 'false');
    }
  };

  useEffect(() => {
    if (isNotificationEnabled) {
      const notificationInterval = setInterval(() => {
        const now = new Date();
        if (now.getHours() === 9 && now.getMinutes() === 0) { // 9 AM daily reminder
          new Notification('NEET 2025 Study Reminder', {
            body: 'Time to start your daily study session! Stay focused on your goal.',
            icon: '/vite.svg'
          });
        }
      }, 60000); // Check every minute

      return () => clearInterval(notificationInterval);
    }
  }, [isNotificationEnabled]);

  return {
    isNotificationEnabled,
    toggleNotification,
    requestNotificationPermission
  };
}