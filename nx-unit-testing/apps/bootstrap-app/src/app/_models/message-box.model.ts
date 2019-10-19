export interface MessageBoxButton {
  action: MessageBoxActionResults;
  text: string;
}

export interface MessageBoxParams {
  title: string;
  message: string;
  buttons: MessageBoxButton[];
}

export type MessageBoxActionResults = 'ok' | 'yes' | 'no';
