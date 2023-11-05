import { Button, DatePicker } from 'antd'
export default function About() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Button type="primary">PRESS ME</Button>
      <DatePicker placeholder="select date" />
      </main>
    )
    
  }