import { Button } from "@/components/ui/button"


function App() {
  return (
   <div className="flex gap-4">
    <Button variant="primary" >Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="muted">Muted</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="teritary">teritary</Button>
   </div>
  )
}

export default App
