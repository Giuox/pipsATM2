export interface Connection {
  id: number;
  platform: PlatformType;
  apiKey: string;
  status: ConnectionStatus;
  createdAt: string;
  updatedAt: string;
}

export type PlatformType = "Binance" | "Coinbase" | "Kraken";

export type ConnectionStatus = "Active" | "Inactive" | "Suspended";

export interface ConnectionFormData {
  platform: PlatformType;
  apiKey: string;
  tradingParams: string;
}

export interface ConnectionConfig {
  lotSize: number;
  riskManagement: boolean;
  tradeFilters: Record<string, unknown>;
}
