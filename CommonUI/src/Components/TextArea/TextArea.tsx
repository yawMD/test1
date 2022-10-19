import React, {
    FunctionComponent,
    ReactElement,
    useEffect,
    useState,
} from 'react';

export interface ComponentProps {
    onChange?: undefined | ((value: string) => void);
    initialValue: string;
    placeholder?: undefined | string;
    onFocus?: () => void;
    onBlur?: () => void;
    className?: undefined | string;
    tabIndex?: number | undefined;
}

const TextArea: FunctionComponent<ComponentProps> = (
    props: ComponentProps
): ReactElement => {
    const [text, setText] = useState<string>('');

    useEffect(() => {
        if (props.initialValue) {
            setText(props.initialValue.toString());
        }
    }, [props.initialValue]);

    const handleChange: Function = (content: string): void => {
        setText(content);
        props.onChange && props.onChange(content);
    };

    return (
        <div>
            <textarea
                placeholder={props.placeholder}
                className={`form-control ${props.className || ''}`}
                value={text}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    const value: string = e.target.value;

                    if (value === '\n') {
                        handleChange('');
                    }

                    handleChange(e.target.value);
                }}
                onFocus={() => {
                    if (props.onFocus) {
                        props.onFocus();
                    }
                }}
                onBlur={() => {
                    if (props.onBlur) {
                        props.onBlur();
                    }
                }}
                tabIndex={props.tabIndex}
            />
        </div>
    );
};

export default TextArea;
