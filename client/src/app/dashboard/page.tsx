"use clinet"
import { CheckCircle, Package, Tag, TrendingDown, TrendingUp, TrendingUpIcon } from "lucide-react"
import CardExpenseSummary from "./CardExpenseSummary"
import CardPopularProducts from "./CardPopularProducts"
import CardPurchaseSummary from "./CardPurchaseSummary"
import CardSalesSummary from "./CardSalesSummary"
import StatCard from "./StatCard"

const  Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <StatCard 
        title="Customer & Expenses"
        primaryIcons={<Package className="text-blue-600 w-6 h-6" />}
        daterange="22 - 04 November 2024"
        details={[
          { title: "Customer Growth", amount: "175.00", changePercentage: 131, IconComponent: TrendingUp },
          { title: "Expenses", amount: "10.00", changePercentage: -56, IconComponent: TrendingDown }
        ]}
      />
      <StatCard 
        title="Dues & Pending Orders"
        primaryIcons={<CheckCircle className="text-blue-600 w-6 h-6" />}
        daterange="22 - 04 November 2024"
        details={[
          { title: "Dues", amount: "250.00", changePercentage: 131, IconComponent: TrendingUp },
          { title: "Pending Orders", amount: "147", changePercentage: -56, IconComponent: TrendingDown }
        ]}
      />
      
      <StatCard 
        title="Sales & Discount"
        primaryIcons={<Tag className="text-blue-600 w-6 h-6" />}
        daterange="22 - 04 November 2024"
        details={[
          { title: "Sales", amount: "1000.00", changePercentage: 20, IconComponent: TrendingUp },
          { title: "Discount", amount: "200", changePercentage: -10, IconComponent: TrendingDown }
        ]}
      />
    </div>
  )
}

export default Dashboard