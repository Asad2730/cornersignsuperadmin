export type Order = {
    id: string;
    signs: number;
    pickupAddress: string;
    returnAddress: string;
    date: string;
    time: string;
    driverName: string;
    driver_pic: string;
    compensation: string;
    status: string;
  };
  
  export const sampleOrders: Order[] = [
    {
      id: "ID-001",
      signs: 3,
      pickupAddress: "13th St, New York",
      returnAddress: "20 th St, New York",
      date: "07/26/2024",
      time: "05:00 PM",
      driverName: "Johnny Barrett",
      driver_pic: "/Oval@2x.png",
      compensation: "$10",
      status: "REACHED",
    },
    {
      id: "ID-002",
      signs: 10,
      pickupAddress: "13th St, New York",
      returnAddress: "20 th St, New York",
      date: "07/26/2024",
      time: "05:00 PM",
      driverName: "Harry Coleman",
      driver_pic: "/Oval@2x.png",
      compensation: "$30",
      status: "PICKED",
    },
    {
      id: "ID-003",
      signs: 3,
      pickupAddress: "13th St, New York",
      returnAddress: "20 th St, New York",
      date: "07/26/2024",
      time: "05:00 PM",
      driverName: "Craig Pearson",
      driver_pic: "/Oval@2x.png",
      compensation: "$10",
      status: "DELIVERED",
    },
    {
      id: "ID-004",
      signs: 3,
      pickupAddress: "13th St, New York",
      returnAddress: "20 th St, New York",
      date: "07/26/2024",
      time: "05:00 PM",
      driverName: "Alex Smith",
      driver_pic: "/Oval@2x.png",
      compensation: "$10",
      status: "ACCEPTED",
    },
    {
      id: "ID-005",
      signs: 3,
      pickupAddress: "13th St, New York",
      returnAddress: "20 th St, New York",
      date: "07/26/2024",
      time: "05:00 PM",
      driverName: "Alan Fuller",
      driver_pic: "/Oval@2x.png",
      compensation: "$10",
      status: "RETRIEVED",
    },
    {
      id: "ID-006",
      signs: 3,
      pickupAddress: "13th St, New York",
      returnAddress: "20 th St, New York",
      date: "07/26/2024",
      time: "05:00 PM",
      driverName: "Chris Carrol",
      driver_pic: "/Oval@2x.png",
      compensation: "$10",
      status: "COMPLETED",
    },
    {
      id: "ID-007",
      signs: 3,
      pickupAddress: "13th St, New York",
      returnAddress: "20 th St, New York",
      date: "07/26/2024",
      time: "05:00 PM",
      driverName: "Craig Fisher",
      driver_pic: "/Oval@2x.png",
      compensation: "$10",
      status: "SIGNS RETURNED",
    },
    {
      id: "ID-008",
      signs: 3,
      pickupAddress: "13th St, New York",
      returnAddress: "20 th St, New York",
      date: "07/26/2024",
      time: "05:00 PM",
      driverName: "Joe Carrol",
      driver_pic: "/Oval@2x.png",
      compensation: "$10",
      status: "PICKED",
    },
    {
      id: "ID-009",
      signs: 3,
      pickupAddress: "13th St, New York",
      returnAddress: "20 th St, New York",
      date: "07/26/2024",
      time: "05:00 PM",
      driverName: "George Pierce",
      driver_pic: "/Oval@2x.png",
      compensation: "$10",
      status: "PENDING",
    },
  ];
  