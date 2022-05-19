import React, {FC, useEffect, useRef, useState} from 'react';
import {
    ContentBlock,
    Editor,
    EditorCommand,
    EditorState,
    RichUtils,
    convertToRaw,
    convertFromRaw,
    DefaultDraftBlockRenderMap,
} from 'draft-js';
import cn from "classnames";
import {RichEditorProps} from "./RichEditor.props";
import {InlineStyleControls} from "./InlineStyleControls/InlineStyleControls";
import {BlockStyleControls} from "./BlockStyleControls/BlockStyleControls";
import Immutable from "immutable";
import {Htag} from "../Htag/Htag";
import {Button} from "../Button/Button";

const getBlockStyle = (block: ContentBlock) => {
    switch (block.getType()) {
        case 'blockquote':
            return 'RichEditor-blockquote';
        default: return '';
    }
}

const styleMap = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2,
    },
};

const CustomComponent: FC = ({children}) => {
    return (
        <div>
            <span> 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥  </span>
            {children}
            <span> 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥  </span>
        </div>
    )
}

const blockRenderMap = Immutable.Map({
    'new-block-type-name': {
        element: CustomComponent
    },
    'header-one': {
        // eslint-disable-next-line react/no-children-prop
        wrapper: <Htag tag={'h1'} children={''} />
    },
    'header-two': {
        // eslint-disable-next-line react/no-children-prop
        wrapper: <Htag tag={'h2'} children={''} />
    },
    'header-three': {
        // eslint-disable-next-line react/no-children-prop
        wrapper: <Htag tag={'h3'} children={''} />
    },
    'header-four': {
        // eslint-disable-next-line react/no-children-prop
        wrapper: <Htag tag={'h3'} children={''} />
    },
    'header-five': {
        // eslint-disable-next-line react/no-children-prop
        wrapper: <Htag tag={'h3'} children={''} />
    },
    'header-six': {
        // eslint-disable-next-line react/no-children-prop
        wrapper: <Htag tag={'h3'} children={''} />
    }
});

const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

export const RichEditor: FC<RichEditorProps> = ({className, editorState, saveText, readonly, ...props}) => {
    const contentState = editorState.getCurrentContent();
    const focusPoint = useRef<Editor>(null)
    const [focus, setFocus] = useState<(() => void)>(() => {})

    let x = convertToRaw(editorState.getCurrentContent()) // на бэк
    console.log(x)
    let g = EditorState.createWithContent(convertFromRaw(x)) // парсинг с бэка
    console.log(g, editorState)
    console.log(convertToRaw(editorState.getCurrentContent()).blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n'))

    useEffect(() => {
        if (!!focusPoint.current!.focus) {
            setFocus(() => focusPoint.current!.focus())
        }
    }, [focusPoint])

    const onChange = (change: EditorState) => {
        if (props.onChange) {
            props.onChange(change);
        }
    };

    const handleSaveText = () => {
        if (saveText) {
            saveText(convertToRaw(editorState.getCurrentContent()))
        }
    }

    const handleKeyCommand = (command: EditorCommand) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            onChange(newState);
            return 'handled'; // true
        }
        return 'not-handled'; // false
    };

    const onTab = (e: React.KeyboardEvent<{}>) => {
        const maxDepth = 4;
        onChange(RichUtils.onTab(e, editorState, maxDepth));
    };
    const toggleBlockType = (blockType: string) => {
        onChange(RichUtils.toggleBlockType(editorState, blockType));
    };
    const toggleInlineStyle = (inlineStyle: string) => {
        onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
    }

    if (readonly) {
        return (
            <div className={cn('RichEditor-editor', 'RichEditor-editor-watch', className)}>
                <Editor
                    readOnly={true}
                    blockStyleFn={getBlockStyle}
                    customStyleMap={styleMap}
                    editorState={editorState}
                    onChange={onChange}
                    onTab={onTab}
                    ref={focusPoint}
                    spellCheck={true}
                    handleKeyCommand={handleKeyCommand}
                    blockRenderMap={extendedBlockRenderMap}
                />
            </div>
        )
    }

    return (
        <div className={cn("RichEditor-root", className)}>
            {!readonly && (
                <div className='flex justify-between RichEditor-pick'>
                    <div>
                        <BlockStyleControls
                            editorState={editorState}
                            onToggle={toggleBlockType}
                        />
                        <InlineStyleControls
                            editorState={editorState}
                            onToggle={toggleInlineStyle}
                        />
                    </div>
                    <Button className='w-[150px]' onClick={handleSaveText}>Создать пост</Button>
                </div>
            )}
            <div className={cn('RichEditor-editor', {
                ['RichEditor-hidePlaceholder']: !contentState.hasText() && contentState.getBlockMap().first().getType() !== 'unstyled'
            })} onClick={focus}>
                <Editor
                    readOnly={readonly || false}
                    blockStyleFn={getBlockStyle}
                    customStyleMap={styleMap}
                    editorState={editorState}
                    onChange={onChange}
                    onTab={onTab}
                    placeholder="Напишите что-то умное..."
                    ref={focusPoint}
                    spellCheck={true}
                    handleKeyCommand={handleKeyCommand}
                    blockRenderMap={extendedBlockRenderMap}
                />
            </div>
        </div>
    )
}


