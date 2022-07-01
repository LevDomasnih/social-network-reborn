import React, {FC, useEffect, useRef, useState} from 'react';
import {
    ContentBlock,
    convertToRaw,
    DefaultDraftBlockRenderMap,
    Editor,
    EditorCommand,
    EditorState,
    RichUtils,
} from 'draft-js';
import {RichEditorProps} from "./RichEditor.props";
import {InlineStyleControls} from "./InlineStyleControls/InlineStyleControls";
import {BlockStyleControls} from "./BlockStyleControls/BlockStyleControls";
import Immutable from "immutable";
import {Htag} from "../Htag/Htag";
import {Button as DefaultButton} from "../Button/Button";
import styled, {css} from "styled-components";

const ContainerRead = styled.div<{ hidePlaceholder?: boolean }>`
  cursor: text;
  font-size: 16px;
  max-height: 200px;
  overflow: hidden;

  & .public-DraftEditorPlaceholder-root,
  & .public-DraftEditor-content {
    margin: 0 -15px -15px;
    padding: 15px;
  }

  & .public-DraftEditor-content {
    min-height: 100px;
  }

  & .RichEditor-blockquote {
    border-left: 5px solid #eee;
    color: #666;
    margin: 16px 0;
    padding: 10px 20px;
  }

  & .public-DraftStyleDefault-pre {
    background-color: rgba(0, 0, 0, 0.05);
    padding: 20px;
  }

  ${(props) => {
    if (props.hidePlaceholder) {
      return css`
        & .public-DraftEditorPlaceholder-root {
          display: none;
        }
      `;
    }
  }}
`;

const ContainerEditable = styled.div`
  background: #fff;
  border: 1px solid #ddd;

  padding: 15px;
`;

const EditableToggles = styled.div`
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled(DefaultButton)`
  width: 150px;
`;

const getBlockStyle = (block: ContentBlock) => {
    switch (block.getType()) {
        case 'blockquote':
            return 'RichEditor-blockquote';
        default:
            return '';
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
        wrapper: <Htag tag={'h1'} children={''}/>
    },
    'header-two': {
        // eslint-disable-next-line react/no-children-prop
        wrapper: <Htag tag={'h2'} children={''}/>
    },
    'header-three': {
        // eslint-disable-next-line react/no-children-prop
        wrapper: <Htag tag={'h3'} children={''}/>
    },
    'header-four': {
        // eslint-disable-next-line react/no-children-prop
        wrapper: <Htag tag={'h3'} children={''}/>
    },
    'header-five': {
        // eslint-disable-next-line react/no-children-prop
        wrapper: <Htag tag={'h3'} children={''}/>
    },
    'header-six': {
        // eslint-disable-next-line react/no-children-prop
        wrapper: <Htag tag={'h3'} children={''}/>
    }
});

const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

export const RichEditor: FC<RichEditorProps> = ({className, editorState, saveText, readonly, ...props}) => {
    const contentState = editorState.getCurrentContent();
    const focusPoint = useRef<Editor>(null)
    const [focus, setFocus] = useState<(() => void)>(() => {
    })

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
            <ContainerRead className={className}>
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
            </ContainerRead>
        )
    }

    return (
        <ContainerEditable className={className}>
            {!readonly && (
                <EditableToggles>
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
                    <Button onClick={handleSaveText}>Создать пост</Button>
                </EditableToggles>
            )}
            <ContainerRead
                hidePlaceholder={!contentState.hasText() && contentState.getBlockMap().first().getType() !== 'unstyled'}
                onClick={focus}
            >
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
            </ContainerRead>
        </ContainerEditable>
    )
}


