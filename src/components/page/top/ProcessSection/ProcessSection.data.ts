import { FileText, PenTool, Code, Bug, Cloud, Paintbrush } from 'lucide-react'

export const DATA = {
  processes: [
    { name: '要件定義', icon: FileText },
    { name: 'デザイン', icon: Paintbrush },
    { name: '設計', icon: PenTool },
    { name: '実装', icon: Code },
    { name: 'テスト', icon: Bug },
    { name: 'デプロイ', icon: Cloud },
  ],
} as const
