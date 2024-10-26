import { LayoutDashboard, Mail, PlusCircle, Calendar, GitBranch, FileText, Database, Users, Filter, Upload, Download, Workflow, Zap, BarChart, PieChart, MousePointer, LinkIcon, Key, Settings, User, Shield, CreditCard, HelpCircle, FileQuestion, MessageCircle } from "lucide-react";

export const navigationItems = [
  {
    id: 'dashboard',
    icon: LayoutDashboard,
    label: 'Dashboard',
    subItems: [
      { id: 'overview', label: 'Overview' },
      { id: 'performance', label: 'Performance Metrics' },
      { id: 'recent', label: 'Recent Activity' }
    ]
  },
  {
    id: 'campaigns',
    icon: Mail,
    label: 'Campaigns',
    subItems: [
      { id: 'create-campaign', label: 'Create Campaign', icon: PlusCircle },
      { id: 'scheduled', label: 'Scheduled Campaigns', icon: Calendar },
      { id: 'ab-testing', label: 'A/B Testing', icon: GitBranch },
      { id: 'drafts', label: 'Drafts', icon: FileText },
      { id: 'templates', label: 'Templates', icon: Database }
    ]
  },
  {
    id: 'contacts',
    icon: Users,
    label: 'Contacts',
    subItems: [
      { id: 'all-contacts', label: 'All Contacts' },
      { id: 'segments', label: 'Segments', icon: Filter },
      { id: 'import', label: 'Import Contacts', icon: Upload },
      { id: 'export', label: 'Export Contacts', icon: Download }
    ]
  },
  {
    id: 'automations',
    icon: Workflow,
    label: 'Automations',
    subItems: [
      { id: 'create-automation', label: 'Create Automation', icon: Zap },
      { id: 'manage-automations', label: 'Manage Automations' },
      { id: 'triggers', label: 'Triggers' },
      { id: 'workflows', label: 'Workflows' }
    ]
  },
  {
    id: 'analytics',
    icon: BarChart,
    label: 'Analytics',
    subItems: [
      { id: 'analytics-overview', label: 'Overview', icon: PieChart },
      { id: 'open-rates', label: 'Open Rates' },
      { id: 'click-rates', label: 'Click Rates', icon: MousePointer },
      { id: 'bounce-rates', label: 'Bounce Rates' }
    ]
  },
  {
    id: 'integrations',
    icon: LinkIcon,
    label: 'Integrations',
    subItems: [
      { id: 'crm', label: 'CRM Integrations' },
      { id: 'ecommerce', label: 'E-commerce Integrations' },
      { id: 'api', label: 'API Access', icon: Key }
    ]
  },
  {
    id: 'settings',
    icon: Settings,
    label: 'Settings',
    subItems: [
      { id: 'account', label: 'Account Settings', icon: User },
      { id: 'security', label: 'Security', icon: Shield },
      { id: 'billing', label: 'Billing Information', icon: CreditCard }
    ]
  },
  {
    id: 'support',
    icon: HelpCircle,
    label: 'Support',
    subItems: [
      { id: 'docs', label: 'Documentation', icon: FileQuestion },
      { id: 'contact', label: 'Contact Support', icon: MessageCircle }
    ]
  }
];

export const footerItems = [
  { id: 'upgrade', label: 'Upgrade Your Plan', icon: CreditCard },
  { id: 'feedback', label: 'Feedback & Suggestions', icon: MessageCircle },
];