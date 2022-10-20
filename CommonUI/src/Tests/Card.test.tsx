import React from 'react';
import Card from '../Components/Card/Card';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Icon from '../Components/Icon/Icon';

describe('Card', () => {
    test('it should render correctly with button and description', () => {
        render(<Card title="title" description="description" />);
        expect(Icon).toBeInTheDocument;
    });
    test('it should have a title content displayed in document', () => {
        render(<Card title="title" description={'description'} />);
        expect(screen.getByText('title')).toBeInTheDocument;
        expect(screen.getByText('title')).toHaveTextContent('title');
    });
    test('it should have a description content displayed in document', () => {
        render(<Card description="description" title={'title'} />);
        expect(screen.getByText('description')).toBeInTheDocument;
        expect(screen.getByText('description')).toHaveTextContent(
            'description'
        );
    });
});
