import { AppSidebar } from "@/components/layout/Sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const Settings = () => {
  const [settings, setSettings] = useState({
    apiKey: "",
    lotSize: 1,
    riskManagement: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setSettings((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSave = () => {
    console.log("Settings saved:", settings);
  };

  return (
    <main className="w-full min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 flex">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <div className="flex-1 ml-8">
          <h1 className="text-2xl font-bold mb-6">Settings</h1>
          <div className="space-y-6">
            {/* API Key */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="apiKey">
                API Key
              </label>
              <Input
                id="apiKey"
                name="apiKey"
                value={settings.apiKey}
                onChange={handleInputChange}
                placeholder="Enter your API key"
                className="h-11 px-4 py-2 rounded-lg border border-input focus:ring-2 focus:ring-ring"
              />
            </div>

            {/* Lot Size */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="lotSize">
                Lot Size
              </label>
              <Input
                id="lotSize"
                name="lotSize"
                type="number"
                value={settings.lotSize}
                onChange={handleInputChange}
                placeholder="Enter lot size"
                className="h-11 px-4 py-2 rounded-lg border border-input focus:ring-2 focus:ring-ring"
              />
            </div>

            {/* Risk Management */}
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium" htmlFor="riskManagement">
                Enable Risk Management
              </label>
              <Switch
                id="riskManagement"
                name="riskManagement"
                checked={settings.riskManagement}
                onCheckedChange={(checked) =>
                  setSettings((prev) => ({ ...prev, riskManagement: checked }))
                }
              />
            </div>

            {/* Save Button */}
            <div>
              <Button
                onClick={handleSave}
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg"
              >
                Save Settings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Settings;
