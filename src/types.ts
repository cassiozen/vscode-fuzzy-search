import * as vscode from 'vscode';

export interface QuickPickItem extends vscode.QuickPickItem {
  filePath: string;
  // shortcut?: string;
  // symbol?: string;
  // range?: vscode.Range;
}

