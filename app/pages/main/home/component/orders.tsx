import Image from "next/image";


const orderList = [
    {title:'Total Drivers',percentage:2.3,count:'14',profit:true,uri:'/drivers.svg'},
    {title:'Total Agents',percentage:2.1,count:'56',profit:true,uri:'/agents.svg'},
    {title:'Total Orders',percentage:1.8,count:'42',profit:false,uri:'/Group 52855.svg'},
    {title:'Revenue Through Subscription',percentage:1.8,count:'$768',profit:false,uri:'/usd-circle.svg'}
]

export const Orders = () =>(
    <div className="grid grid-cols-1 md:grid-cols-4 gap-1 lg:gap-4 mb-4 lg:h-[110px]">
    {orderList.map((order,index)=>(
       <div key={index} className="overflow-hidden rounded-2xl  bg-[#FFFFFF] shadow">
       <div className="px-4 py-5 sm:p-6">
         <div className="flex items-center justify-between">
           <div>
             <h3 className="text-sm font-medium text-gray-500 lg:text-nowrap">
                {order.title}
             </h3>
             <span className="mt-1 text-2xl font-semibold text-[#000637]">{order.count}</span>
             <div className="flex items-center mt-2 ">
               <span className={`text-sm font-medium ${order.profit?'text-[#3DD598]':'text-[#F0142F]'}`}>{order.percentage}%</span>
               <Image
                 alt="arow"
                 src={`${order.profit?'/ic-arrow-narrow-up.svg':'/ic-arrow-narrow-up-1.svg'}`}
                 height={15}
                 width={15}
                 quality={100}
               />
               <span className="ml-1 text-xs text-gray-500">than last year</span>
             </div>
           </div>
           <div className="flex-shrink-0">
             <div className="w-12 h-12 bg-[#FFFFFF] z-10 shadow-xl border  rounded-full flex items-center justify-center">
               <Image
                 alt="uri"
                 src={order.uri}
                 quality={100}
                 height={20}
                 width={20}
               />
             </div>
           </div>
         </div>
       </div>
     </div>
    ))}
 </div>
)
