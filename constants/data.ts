import { NavItem } from '@/types';

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: 'Candice Schiner',
    company: 'Dell',
    role: 'Frontend Developer',
    verified: false,
    status: 'Active'
  },
  {
    id: 2,
    name: 'John Doe',
    company: 'TechCorp',
    role: 'Backend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    company: 'WebTech',
    role: 'UI Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 4,
    name: 'David Smith',
    company: 'Innovate Inc.',
    role: 'Fullstack Developer',
    verified: false,
    status: 'Inactive'
  },
  {
    id: 5,
    name: 'Emma Wilson',
    company: 'TechGuru',
    role: 'Product Manager',
    verified: true,
    status: 'Active'
  },
  {
    id: 6,
    name: 'James Brown',
    company: 'CodeGenius',
    role: 'QA Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 7,
    name: 'Laura White',
    company: 'SoftWorks',
    role: 'UX Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 8,
    name: 'Michael Lee',
    company: 'DevCraft',
    role: 'DevOps Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 9,
    name: 'Olivia Green',
    company: 'WebSolutions',
    role: 'Frontend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 10,
    name: 'Robert Taylor',
    company: 'DataTech',
    role: 'Data Analyst',
    verified: false,
    status: 'Active'
  }
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard',
    label: 'Dashboard'
  },
  {
    title: 'Employee',
    href: '/dashboard/employee',
    icon: 'user',
    label: 'employee'
  },
  {
    title: 'Product',
    href: '/dashboard/product',
    icon: 'product',
    label: 'product'
  },
  {
    title: 'Account',
    icon: 'user',
    label: 'account',
    children: [
      {
        title: 'Profile',
        href: '/dashboard/profile',
        icon: 'userPen',
        label: 'profile'
      },
      {
        title: 'Login',
        href: '/',
        icon: 'login',
        label: 'login'
      }
    ]
  },
  {
    title: 'Kanban',
    href: '/dashboard/kanban',
    icon: 'kanban',
    label: 'kanban'
  },
  {
    title: 'Support',
    href: '/dashboard/support',
    icon: 'support',
    label: 'support'
  }
];

export type Ticket = {
  id: number;
  customer: string;
  description: string;
  status: 'Open' | 'Closed';
};

export type ChatMessage = {
  id: number;
  sender: 'user' | 'agent';
  message: string;
  time: string;
};

export const tickets: Ticket[] = [
  {
    id: 1,
    customer: 'Customer 1',
    description: 'Unable to complete transaction',
    status: 'Open'
  },
  {
    id: 2,
    customer: 'Customer 2',
    description: 'Product not received',
    status: 'Open'
  },
  {
    id: 3,
    customer: 'Customer 3',
    description: 'Refund request',
    status: 'Closed'
  },
  {
    id: 4,
    customer: 'Customer 4',
    description: 'Login issues',
    status: 'Open'
  },
  {
    id: 5,
    customer: 'Customer 5',
    description: 'Payment failed',
    status: 'Open'
  }
];

export const initialChatMessagesData: Record<number, ChatMessage[]> = {
  1: [
    {
      id: 1,
      sender: 'user',
      message: 'I am not able to do transaction',
      time: '10:30 AM'
    },
    { id: 2, sender: 'user', message: 'Please help me', time: '10:31 AM' },
    {
      id: 3,
      sender: 'agent',
      message:
        "I understand your concern. Can you please provide more details about the error you're seeing?",
      time: '10:32 AM'
    }
  ],
  2: [
    {
      id: 1,
      sender: 'user',
      message: "I haven't received my product yet",
      time: '11:00 AM'
    },
    {
      id: 2,
      sender: 'agent',
      message:
        'I apologize for the inconvenience. Let me check the status of your order.',
      time: '11:02 AM'
    }
  ],
  3: [
    {
      id: 1,
      sender: 'user',
      message: 'I want to request a refund',
      time: '09:45 AM'
    },
    {
      id: 2,
      sender: 'agent',
      message:
        'Certainly, I can help you with that. May I know the reason for the refund?',
      time: '09:47 AM'
    }
  ],
  4: [
    {
      id: 1,
      sender: 'user',
      message: "I'm unable to log in to my account",
      time: '14:20 PM'
    },
    {
      id: 2,
      sender: 'agent',
      message:
        "I'm sorry to hear that. Let's try to resolve this. Have you tried resetting your password?",
      time: '14:22 PM'
    }
  ],
  5: [
    {
      id: 1,
      sender: 'user',
      message: 'My payment failed when trying to make a purchase',
      time: '16:05 PM'
    },
    {
      id: 2,
      sender: 'agent',
      message:
        'I apologize for the trouble. Can you tell me what error message you received?',
      time: '16:07 PM'
    }
  ]
};
