import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Index: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Submitted:", inputValue);
    // You can add more functionality here
  };

  const handleClick = () => {
    console.log("Button clicked");
    // You can add more functionality here
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My TypeScript Bare-Bones Application</h1>
      
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is a simple TypeScript application that you can modify and build upon.</p>
        </CardContent>
      </Card>
      
      <div className="flex space-x-2 mb-4">
        <Input 
          placeholder="Enter something..." 
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
      
      <Button variant="outline" onClick={handleClick}>Click me</Button>
    </div>
  );
};

export default Index;