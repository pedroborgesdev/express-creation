import { useState } from "react";
import MouseIllustration from "@/components/MouseIllustration";
import SettingRow from "@/components/SettingRow";
import ClickTestArea from "@/components/ClickTestArea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

const Index = () => {
  const [cps, setCps] = useState(17);
  const [variation, setVariation] = useState(3);
  const [activateHotkey, setActivateHotkey] = useState("Button2");
  const [desiredKey, setDesiredKey] = useState<"Left" | "Right">("Left");
  const [activeOnlyWhenPressed, setActiveOnlyWhenPressed] = useState(true);

  return (
    <div className="min-h-screen bg-background p-8 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        {/* Window Controls */}
        <div className="flex justify-end gap-2 mb-6 bg-panel/50 backdrop-blur-sm border border-panel-border rounded-lg p-3 shadow-lg">
          <button className="w-12 h-8 bg-interactive hover:bg-interactive-hover rounded transition-all duration-200 flex items-center justify-center hover:shadow-glow group">
            <span className="text-foreground text-xl leading-none group-hover:scale-110 transition-transform">−</span>
          </button>
          <button className="w-12 h-8 bg-interactive hover:bg-interactive-hover rounded transition-all duration-200 flex items-center justify-center hover:shadow-glow group">
            <span className="text-foreground text-xl leading-none group-hover:scale-110 transition-transform">□</span>
          </button>
          <button className="w-12 h-8 bg-destructive hover:bg-destructive/80 rounded transition-all duration-200 flex items-center justify-center hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] group">
            <span className="text-destructive-foreground text-xl leading-none group-hover:scale-110 transition-transform">×</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mouse Illustration */}
          <div className="flex items-center justify-center">
            <MouseIllustration />
          </div>

          {/* Settings Panel */}
          <div className="space-y-6">
            <div className="bg-panel border border-panel-border rounded-xl p-6 shadow-card backdrop-blur-sm hover:shadow-glow transition-shadow duration-300">
              <SettingRow label="CPS (click per second)">
                <div className="flex items-center gap-3 w-48">
                  <Slider
                    value={[cps]}
                    onValueChange={(value) => setCps(value[0])}
                    min={1}
                    max={50}
                    step={1}
                    className="flex-1"
                  />
                  <div className="bg-interactive rounded-lg px-4 py-2 min-w-[60px] text-center">
                    <span className="font-semibold text-foreground">{cps}</span>
                  </div>
                </div>
              </SettingRow>

              <div className="border-t border-border my-4" />

              <SettingRow label="Variation">
                <div className="flex items-center gap-3 w-48">
                  <Slider
                    value={[variation]}
                    onValueChange={(value) => setVariation(value[0])}
                    min={0}
                    max={10}
                    step={1}
                    className="flex-1"
                  />
                  <div className="bg-interactive rounded-lg px-4 py-2 min-w-[60px] text-center">
                    <span className="font-semibold text-foreground">{variation}</span>
                  </div>
                </div>
              </SettingRow>

              <div className="border-t border-border my-4" />

              <SettingRow label="Activate Hotkey">
                <Button
                  variant="secondary"
                  className="min-w-[120px] bg-interactive hover:bg-interactive-hover"
                >
                  {activateHotkey}
                </Button>
              </SettingRow>

              <div className="border-t border-border my-4" />

              <SettingRow label="Desired Key">
                <div className="flex gap-2">
                  <Button
                    variant={desiredKey === "Left" ? "default" : "secondary"}
                    onClick={() => setDesiredKey("Left")}
                    className={desiredKey === "Left" ? "min-w-[80px]" : "min-w-[80px] bg-interactive hover:bg-interactive-hover"}
                  >
                    Left
                  </Button>
                  <Button
                    variant={desiredKey === "Right" ? "default" : "secondary"}
                    onClick={() => setDesiredKey("Right")}
                    className={desiredKey === "Right" ? "min-w-[80px]" : "min-w-[80px] bg-interactive hover:bg-interactive-hover"}
                  >
                    Right
                  </Button>
                </div>
              </SettingRow>

              <div className="border-t border-border my-4" />

              <SettingRow label="Active only when pressed">
                <Checkbox
                  checked={activeOnlyWhenPressed}
                  onCheckedChange={(checked) => setActiveOnlyWhenPressed(checked as boolean)}
                  className="h-6 w-6"
                />
              </SettingRow>
            </div>

            {/* App Info */}
            <div className="text-center space-y-1">
              <p className="text-sm text-muted-foreground">Clico 1.0.0 BETA</p>
              <p className="text-xs text-muted-foreground">Creator: Pedro Borges (pedroborgesdev)</p>
              <p className="text-xs text-muted-foreground">Powered by: MOSSGA</p>
              <a
                href="https://discord.com/mossga"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:text-primary/80 transition-colors inline-block"
              >
                MOSSGA Discord: https://discord.com/mossga
              </a>
            </div>
          </div>
        </div>

        {/* Click Test Area */}
        <ClickTestArea cps={cps} />
      </div>
    </div>
  );
};

export default Index;
