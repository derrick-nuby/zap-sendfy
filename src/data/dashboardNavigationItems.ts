import {
  LayoutDashboard, Mail, PlusCircle, Calendar, GitBranch, FileText, Database, Users, Filter, Upload, Download, Workflow, Zap, BarChart, PieChart, MousePointer, LinkIcon, Key, Settings, User, Shield, CreditCard, HelpCircle, FileQuestion, MessageCircle, MailOpen, UserCheck, Settings2, Cpu, ChartBar, Target, ThumbsUp, Tag, Clipboard, Edit3, ListChecks,
  ShoppingCart, Bell, FilePlus, FolderPlus, RefreshCw, ToggleLeft, UserPlus, Save, Headphones
} from "lucide-react";

export const navigationItems = [

  // dashboard section
  {
    id: 'dashboard',
    icon: LayoutDashboard,
    label: 'Dashboard',
    subItems: [
      { id: 'overview', label: 'Overview', icon: ChartBar },
      { id: 'recent-activity', label: 'Recent Activity', icon: Clipboard },
      { id: 'notifications', label: 'Notifications', icon: Bell },
      { id: 'logs', label: 'System Logs', icon: FileText }
    ]
  },

  // Send Emails section
  {
    id: 'campaigns',
    icon: Mail,
    label: 'Campaigns',
    subItems: [
      { id: 'new-campaign', label: 'New Campaign', icon: PlusCircle },
      { id: 'email-templates', label: 'Email Templates', icon: FileText },
      { id: 'schedule-email', label: 'Schedule Email', icon: Calendar },
      { id: 'test-campaign', label: 'A/B Testing', icon: GitBranch },
      { id: 'email-tracking', label: 'Email Tracking', icon: MousePointer },
      { id: 'drafts', label: 'Drafts', icon: Database },
      { id: 'saved-templates', label: 'Templates', icon: Save }

    ]
  },

  // Subscribers section
  {
    id: 'subscribers',
    icon: Users,
    label: 'Subscribers',
    subItems: [
      { id: 'add-subscriber', label: 'Add Subscriber', icon: UserPlus },
      { id: 'all-subscribers', label: 'All Subscribers', icon: UserCheck },
      { id: 'import-subscribers', label: 'Import Subscribers', icon: Upload },
      { id: 'export-subscribers', label: 'Export Subscribers', icon: Download },
      { id: 'subscriber-analytics', label: 'Subscriber Analytics', icon: BarChart },
      { id: 'tags', label: 'Manage Tags', icon: Filter }
    ]
  },

  // SMTPs section
  {
    id: 'smtps',
    icon: Cpu,
    label: 'SMTPs',
    subItems: [
      { id: 'add-smtp', label: 'Add SMTP', icon: FilePlus },
      { id: 'manage-smtp', label: 'Manage SMTPs', icon: Settings2 },
      { id: 'smtp-status', label: 'SMTP Status', icon: MailOpen },
      { id: 'delivery-settings', label: 'Delivery Settings', icon: ToggleLeft },
      { id: 'refresh-smtp', label: 'Refresh SMTP Connections', icon: RefreshCw },
      { id: 'smtp-security', label: 'SMTP Security', icon: Shield }
    ]
  },

  // Segments section
  {
    id: 'segments',
    icon: Filter,
    label: 'Segments',
    subItems: [
      { id: 'add-segment', label: 'Add Segment', icon: FolderPlus },
      { id: 'manage-segments', label: 'Manage Segments', icon: Settings2 },
      { id: 'test-segment', label: 'Test Segment', icon: GitBranch },
      { id: 'segment-analytics', label: 'Segment Analytics', icon: PieChart },
      { id: 'target-audience', label: 'Target Audience', icon: Target }
    ]
  },

  // automations section
  {
    id: 'automations',
    icon: Workflow,
    label: 'Automations',
    subItems: [
      { id: 'create-automation', label: 'New Automation', icon: Zap },
      { id: 'manage-automations', label: 'Manage Automations', icon: ListChecks },
      { id: 'triggers', label: 'Set Triggers', icon: ThumbsUp },
      { id: 'workflows', label: 'Workflow Editor', icon: Edit3 }
    ]
  },

  // integrations section
  {
    id: 'integrations',
    icon: LinkIcon,
    label: 'Integrations',
    subItems: [
      { id: 'crm', label: 'CRM Integrations', icon: LinkIcon },
      { id: 'ecommerce', label: 'E-commerce Integrations', icon: ShoppingCart },
      { id: 'api-access', label: 'API Access', icon: Key }
    ]
  },

  // Analytics section
  {
    id: 'analytics',
    icon: BarChart,
    label: 'Analytics',
    subItems: [
      { id: 'overview', label: 'Overview', icon: PieChart },
      { id: 'email-performance', label: 'Email Performance', icon: Mail },
      { id: 'open-rates', label: 'Open Rates', icon: MousePointer },
      { id: 'click-rates', label: 'Click Rates', icon: MousePointer },
      { id: 'bounce-rates', label: 'Bounce Rates', icon: MailOpen }
    ]
  },

  // Users section
  {
    id: 'users',
    icon: User,
    label: 'Users',
    subItems: [
      { id: 'user-management', label: 'User Management', icon: Users },
      { id: 'add-user', label: 'Add User', icon: UserPlus },
      { id: 'roles-permissions', label: 'Roles & Permissions', icon: Shield },
      { id: 'account-settings', label: 'Account Settings', icon: Settings },
      { id: 'user-activity', label: 'User Activity', icon: Clipboard }
    ]
  },

  // Settings section
  {
    id: 'settings',
    icon: Settings,
    label: 'Settings',
    subItems: [
      { id: 'general-settings', label: 'General Settings', icon: Settings2 },
      { id: 'smtp-configurations', label: 'SMTP Configurations', icon: Cpu },
      { id: 'account-security', label: 'Account Security', icon: Shield },
      { id: 'billing', label: 'Billing Information', icon: CreditCard }
    ]
  },

  // Support section
  {
    id: 'support',
    icon: HelpCircle,
    label: 'Support',
    subItems: [
      { id: 'docs', label: 'Documentation', icon: FileQuestion },
      { id: 'faq', label: 'FAQ', icon: MessageCircle },
      { id: 'contact-support', label: 'Contact Support', icon: Headphones }
    ]
  }
];


export const footerItems = [
  { id: 'upgrade', label: 'Upgrade Your Plan', icon: CreditCard },
  { id: 'feedback', label: 'Feedback & Suggestions', icon: MessageCircle },
];