import React from 'react';
import { DashboardLayout } from './components/DashboardLayout';
import { WelcomeBanner } from './components/WelcomeBanner';
import { BookingCard } from './components/BookingCard';
import { MyPets } from './components/MyPets';
import { RecentOrders } from './components/RecentOrders';
import { RecentActivity } from './components/RecentActivity';

export const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      {/* Smart Welcome Banner */}
      <WelcomeBanner />

      {/* Primary Grid: Appointments(2/3) + Activity(1/3) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 items-start">
        <div className="lg:col-span-2">
          <BookingCard />
        </div>
        <div className="lg:col-span-1">
          <RecentActivity />
        </div>
      </div>

      {/* Secondary Grid: Pets + Orders (Equal Split) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <MyPets />
        <RecentOrders />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
