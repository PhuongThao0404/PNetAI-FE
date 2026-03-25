import React from 'react';
import { DashboardLayout } from './components/DashboardLayout';
import { WelcomeBanner } from './components/WelcomeBanner';
import { StatCard } from './components/StatCard';
import { BookingCard } from './components/BookingCard';
import { QuickActions, RewardCard } from './components/QuickActions';
import { MyPets } from './components/MyPets';
import { RecentOrders } from './components/RecentOrders';
import { RecentActivity } from './components/RecentActivity';
import { DASHBOARD_STATS } from './data/mockData';

export const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      {/* Smart Welcome Banner */}
      <WelcomeBanner />

      {/* Key Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {DASHBOARD_STATS.map((stat, idx) => (
          <StatCard 
            key={idx}
            label={stat.label} 
            value={stat.value} 
            change={stat.change} 
            changeType={stat.type} 
            icon={stat.icon} 
            emoji={stat.emoji} 
            isAccent={stat.isAccent} 
          />
        ))}
      </div>

      {/* Primary Grid: Appointments + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <BookingCard />
        </div>
        <div className="flex flex-col gap-6">
          <QuickActions />
          <RewardCard />
        </div>
      </div>

      {/* Secondary Grid: Pets + Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <MyPets />
        <RecentOrders />
      </div>

      {/* Bottom Row: Recent Activity */}
      <RecentActivity />
    </DashboardLayout>
  );
};

export default DashboardPage;
