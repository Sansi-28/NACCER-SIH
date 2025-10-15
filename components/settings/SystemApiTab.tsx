import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { KeyRound, Copy } from "lucide-react";
import { Label } from "@/components/ui/label";

export function SystemApiTab() {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><KeyRound /> System & API</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>API Key</Label>
          <div className="flex gap-2 mt-1">
            <Input readOnly value="nacc_live_********************" />
            <Button variant="outline"><Copy className="mr-2 h-4 w-4" /> Copy</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}