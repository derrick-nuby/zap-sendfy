import React from 'react';

interface DashboardHeaderProps {
  children?: React.ReactNode;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ children }) => {
  return (
    <div className='bg-red-500 h-9'>
      {children}
    </div>
  );
};

export default DashboardHeader;
