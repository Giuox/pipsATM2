import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ConnectionCardProps {
  platform: string;
  status: "Active" | "Inactive" | "Suspended";
  apiKey: string;
  onEdit: () => void;
  onDelete: () => void;
}

const ConnectionCard = ({ platform, status, apiKey, onEdit, onDelete }: ConnectionCardProps) => {
  const statusVariant = {
    Active: "default",
    Inactive: "secondary",
    Suspended: "destructive",
  };

  return (
    <Card className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {platform}
          <Badge variant={statusVariant[status]}>{status}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">API Key: {apiKey}</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button
          variant="secondary"
          onClick={onEdit}
          className="border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 rounded-lg"
        >
          Edit
        </Button>
        <Button
          variant="destructive"
          onClick={onDelete}
          className="bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 px-4 py-2 rounded-lg"
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ConnectionCard;
