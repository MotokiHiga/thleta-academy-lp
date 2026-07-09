import { Fragment, type ReactNode } from 'react';

export function withLineBreaks(text: string, breakClassName?: string): ReactNode {
  const lines = text.split('\n');
  return lines.map((line, i) => (
    <Fragment key={i}>
      {line}
      {i < lines.length - 1 && <br className={breakClassName} />}
    </Fragment>
  ));
}
