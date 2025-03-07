import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ConnectionFormProps {
  onSubmit: (data: { platform: string; apiKey: string; tradingParams: string }) => void;
  onCancel: () => void;
  initialData?: { platform: string; apiKey: string; tradingParams: string };
}

const ConnectionForm = ({ onSubmit, onCancel, initialData }: ConnectionFormProps) => {
  const [formData, setFormData] = useState({
    platform: initialData?.platform || "",
    apiKey: initialData?.apiKey || "",
    tradingParams: initialData?.tradingParams || "",
  });

  const handleChange = (field: keyof typeof formData) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Dialog open onOpenChange={onCancel}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{initialData ? "Edit Connection" : "Add Connection"}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Platform</label>
            <Select value={formData.platform} onValueChange={(value) => setFormData({ ...formData, platform: value })}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Binance">Binance</SelectItem>
                <SelectItem value="Coinbase">Coinbase</SelectItem>
                <SelectItem value="Kraken">Kraken</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">API Key</label>
            <Input
              value={formData.apiKey}
              onChange={handleChange("apiKey")}
              placeholder="Enter API key"
              className="h-11 px-4 py-2 rounded-lg border border-input focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Trading Parameters</label>
            <Input
              value={formData.tradingParams}
              onChange={handleChange("tradingParams")}
              placeholder="Enter trading parameters"
              className="h-11 px-4 py-2 rounded-lg border border-input focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="secondary"
            onClick={onCancel}
            className="border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 rounded-lg"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg"
          >
            {initialData ? "Save Changes" : "Add Connection"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConnectionForm;
