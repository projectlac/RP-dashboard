import { ReactNode } from 'react';
import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: '',
    items: [
      {
        name: 'Overview',
        link: '/overview',
        icon: DesignServicesTwoToneIcon
      }
    ]
  },
  {
    heading: 'Dashboards',
    items: [
      {
        name: 'Dasboard',
        link: '/dashboards/main',
        icon: BrightnessLowTwoToneIcon
      }
    ]
  },
  {
    heading: 'Façade',
    items: [
      {
        name: 'Screensaver',
        icon: TableChartTwoToneIcon,
        link: '/facade/screensaver'
      },
      {
        name: 'Hotspot',
        icon: TableChartTwoToneIcon,
        link: '/facade/hotspot'
      }
    ]
  },
  {
    heading: 'Corridor',
    items: [
      {
        name: 'Screensaver',
        icon: TableChartTwoToneIcon,
        link: '/corridor/screensaver'
      },
      {
        name: 'Page',
        icon: TableChartTwoToneIcon,
        link: '/corridor/page'
      }
    ]
  }
];

export default menuItems;
