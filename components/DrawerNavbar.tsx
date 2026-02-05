import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { MenuIcon } from "lucide-react"

export default function DrawerNav() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild className="sm:hidden">
        <Button variant="outline"><MenuIcon size={24} /></Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Move Goal</DrawerTitle>
          <DrawerDescription>Set your daily activity goal.</DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}
