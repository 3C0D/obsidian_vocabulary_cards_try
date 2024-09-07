import { Editor, MarkdownView, Plugin } from "obsidian";

export function getEditor(plugin: Plugin) {
    const activeView = plugin.app.workspace.getActiveViewOfType(MarkdownView);
    if (!activeView) return
    const editor = activeView.editor
    return editor
}

export const getContent = (ed: Editor) => {
    return ed.getValue().trim();
};

export function leafContent(plugin: Plugin) {
    const editor = getEditor(plugin)
    if (!editor) return
    return getContent(editor)
}


export function getExtSource(source: string, plugin: Plugin) {
    this.sourceFromLeaf = ""
    // source has some content
    if (source.trim()) return source
    // try to get content from leaf under code block    
    const content = leafContent(plugin)
    if (!content) return ""

    const codeBlockRegex = /^(?:```|~~~)([a-z0-9-+]*)\n([\s\S]*?)\n(?:```|~~~)$/gim; //case-insensitive

    // chercher les lignes qui ne sont pas dans un code block.
    let cleanedContent = content;
    cleanedContent = cleanedContent.replace(codeBlockRegex, '');
    source = cleanedContent
        .split('\n')
        .filter(line => line.includes(':'))
        .map(line => line.trim().replace(/^[*\-+]\s*/, ''))
        .join('\n');
    this.sourceFromLeaf = source
    return source
}
