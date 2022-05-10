import type { NextPage } from 'next'
import { Button } from '@askbuddie/ui'

const Home: NextPage = () => {
  return (
    <main className="container mx-auto">
      <div className="container mx-auto py-6">
        <h1 className="text-3xl font-bold text-askbuddie-red">Hello, buddies</h1>
        <div className="shared-button">
          <Button text="Button" />
        </div>
      </div>
    </main>
  )
}

export default Home
