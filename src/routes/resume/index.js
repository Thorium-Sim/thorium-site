import { h } from 'preact';
import resume from './resume.md';
import Markdown from 'react-markdown';

export default () => <Markdown source={resume} />;
