import { AppSidebar } from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Connections = () => {
  const [connections, setConnections] = useState([
    { id: 1, platform: "Binance", status: "Active", apiKey: "************" },
    { id: 2, platform: "Coinbase", status: "Inactive", apiKey: "************" },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ platform: "", apiKey: "" });

  const handleAddConnection = () => {
    setConnections([
      ...connections,
      { id: connections.length + 1, platform: formData.platform, status: "Active", apiKey: formData.apiKey },
    ]);
    setFormData({ platform: "", apiKey: "" });
    setIsDialogOpen(false);
  };

  const handleDeleteConnection = (id: number) => {
    setConnections(connections.filter((connection) => connection.id !== id));
  };

  return (
    <main className="w-full min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 flex">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <div className="flex-1 ml-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Trading Connections</h1>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg">
                  Add Connection
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Connection</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Platform</label>
                    <Input
                      value={formData.platform}
                      onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                      placeholder="Enter platform name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">API Key</label>
                    <Input
                      value={formData.apiKey}
                      onChange={(e) => setFormData({ ...formData, apiKey: e.target.value })}
                      placeholder="Enter API key"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    variant="secondary"
                    onClick={() => setIsDialogOpen(false)}
                    className="border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 rounded-lg"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleAddConnection}
                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg"
                  >
                    Add
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Table className="rounded-lg border border-border bg-card shadow-sm">
            <TableHeader>
              <TableRow>
                <TableHead>Platform</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>API Key</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {connections.map((connection) => (
                <TableRow key={connection.id}>
                  <TableCell>{connection.platform}</TableCell>
                  <TableCell>{connection.status}</TableCell>
                  <TableCell>{connection.apiKey}</TableCell>
                  <TableCell>
                    <Button
                      variant="destructive"
                      onClick={() => handleDeleteConnection(connection.id)}
                      className="bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 px-4 py-2 rounded-lg"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
};

export default Connections;
