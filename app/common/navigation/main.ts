
interface IDetail {
  detail: (id: string, optionalParam?: string) => string;
  edit?: string;
}


interface ISettingsNav {
  PersonalInformation: string
  UpdatePassword: string
  SignCharges: string
  Guide:string
}

const orders: IDetail = {
  detail: (id: string, optionalParam?: string) => {
    let url = `/pages/main/order/${id}`;
    if (optionalParam) {
      url += `?optionalParam=${encodeURIComponent(optionalParam)}`; 
    }
    return url;
  },
}

const drivers:IDetail = {
  detail:(id:string) => `/pages/main/driver/${id}`,
  edit: `/pages/main/driver/edit`
}


const agents:IDetail = {
  detail:(id:string) => `/pages/main/agent/${id}`,
  edit: `/pages/main/agent/edit`
}


const settings: ISettingsNav = {
  PersonalInformation: '/pages/main/settings/personalInfo',
  UpdatePassword: '/pages/main/settings/updatepassword',
  SignCharges: '/pages/main/settings/signCharges',
  Guide:'/pages/main/settings/guide'
}

export const dashboard_navigation = {
  Home: { href: "/pages/main/home", icon: "/dashboard-4-svgrepo-com.svg" },
  Orders: { href: "/pages/main/order", icon: "/Group 52855.svg", subRoutes: orders },
  Drivers: { href: "/pages/main/driver", icon: "/drivers.svg" ,subRoutes: drivers },
  Agents: { href: "/pages/main/agent", icon: "/agents.svg",subRoutes:agents  },
  Settings: { href: settings.PersonalInformation, icon: "/Group 54114.svg" ,subRoutes:settings},
};
