interface TableOfContentProps {
    tableOfContents: [string, string, string][];
  }
  
  export const TableOfContent: React.FC<TableOfContentProps> = ({ tableOfContents }) => {
    return (
      <nav aria-label="Table of Contents">
        <ul className="toc-list">
          {tableOfContents.map(([key, text, tag]) => (
            <li key={key} className={`toc-item toc-${tag}`}>
              <a href={`#${key}`} className="toc-link">
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  