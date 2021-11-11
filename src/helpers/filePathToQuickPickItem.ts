import * as vscode from 'vscode';
import * as path from 'path';
import fileType from './file-type';
import { QuickPickItem } from '../types';

export default function filePathToQuickPickItem(
  filePath: string,
  isRecent: boolean
): QuickPickItem {
  const workspacePath =
    vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders[0].uri.path;
  const uri = vscode.Uri.file(filePath);
  const typeName = fileType(uri);

  return {
    label: `$(${typeName}) ${path.parse(filePath).base}`,
    description: `${path.parse(filePath).dir.replace(`${workspacePath}` || '', '')}${
      isRecent ? '  $(clock)' : ''
    }`,
    alwaysShow: true,
    filePath,
  };
}
