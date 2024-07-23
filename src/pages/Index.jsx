import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Bare-Bones Application</h1>
      
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is a simple application that you can modify and build upon.</p>
        </CardContent>
      </Card>
      
      <div className="flex space-x-2 mb-4">
        <Input placeholder="Enter something..." />
        <Button>Submit</Button>
      </div>
      
      <Button variant="outline">Click me</Button>
    </div>
  );
};

export default Index;