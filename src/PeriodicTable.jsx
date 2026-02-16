import React, { useState } from 'react';
import { elements, groups, rows } from './data';
import { recipes } from './recipes';

const PeriodicTable = () => {
    const [activeElement, setActiveElement] = useState(null);
    const [activeRecipe, setActiveRecipe] = useState(null);

    const getElement = (r, g) => {
        return elements.find(el => el.row === r && el.group === g);
    };

    const getGroupColor = (gId) => {
        const group = groups.find(g => g.id === gId);
        return group ? group.color : '#fff';
    };

    const isElementInRecipe = (symbol) => {
        if (!activeRecipe) return true;
        return activeRecipe.elements.includes(symbol);
    };

    const renderGrid = () => {
        const grid = [];
        for (let r = 1; r <= 4; r++) {
            // Add Row Label
            const rowData = rows.find(row => row.id === r);
            grid.push(
                <div key={`row-label-${r}`} style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    fontSize: '0.85em',
                    color: '#ccc',
                    paddingRight: '15px',
                    textAlign: 'right',
                    justifyContent: 'flex-end',
                    borderRight: '1px solid rgba(255,255,255,0.1)',
                    marginRight: '10px'
                }}>
                    {rowData ? rowData.name : `Row ${r}`}
                </div>
            );

            for (let g = 1; g <= 5; g++) {
                const el = getElement(r, g);
                const color = getGroupColor(g);

                if (el) {
                    const isInRecipe = isElementInRecipe(el.symbol);
                    grid.push(
                        <div
                            key={`${r}-${g}`}
                            className="element"
                            style={{
                                borderColor: color,
                                boxShadow: isInRecipe ? `0 0 ${activeRecipe ? '15px' : '5px'} ${color}${activeRecipe ? '80' : '40'}` : 'none',
                                background: isInRecipe
                                    ? `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, ${color}20 100%)`
                                    : 'rgba(255,255,255,0.02)',
                                opacity: isInRecipe ? 1 : 0.2,
                                filter: isInRecipe ? 'none' : 'grayscale(100%)',
                                transform: isInRecipe && activeRecipe ? 'scale(1.05)' : 'scale(1)',
                                zIndex: isInRecipe && activeRecipe ? 10 : 1
                            }}
                            onMouseEnter={() => setActiveElement(el)}
                            onMouseLeave={() => setActiveElement(null)}
                        >
                            <div className="element-header">
                                <span>{el.atomicNumber}</span>
                            </div>
                            <div className="element-symbol" style={{ color: color, textShadow: `0 0 10px ${color}` }}>
                                {el.symbol}
                            </div>
                            <div className="element-name">{el.name}</div>
                        </div>
                    );
                } else {
                    grid.push(<div key={`${r}-${g}`} className="element empty-cell"></div>);
                }
            }
        }
        return grid;
    };

    return (
        <div className="periodic-table-wrapper">
            {/* Recipe Controls */}
            <div style={{ marginBottom: '30px', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '15px', color: '#e2e8f0' }}>🧪 System Architectures (Click to Highlight)</h3>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    {recipes.map(recipe => (
                        <button
                            key={recipe.id}
                            onClick={() => setActiveRecipe(activeRecipe?.id === recipe.id ? null : recipe)}
                            style={{
                                padding: '10px 20px',
                                background: activeRecipe?.id === recipe.id ? '#646cff' : 'rgba(255,255,255,0.1)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                borderRadius: '8px',
                                color: '#fff',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            {recipe.name}
                        </button>
                    ))}
                    <button
                        onClick={() => setActiveRecipe(null)}
                        style={{
                            padding: '10px 20px',
                            background: 'transparent',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '8px',
                            color: '#aaa',
                            cursor: 'pointer'
                        }}
                    >
                        Reset
                    </button>
                </div>
                {activeRecipe && (
                    <div style={{
                        marginTop: '20px',
                        padding: '15px',
                        background: 'rgba(59, 130, 246, 0.1)',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        borderRadius: '8px',
                        maxWidth: '700px',
                        marginInline: 'auto'
                    }}>
                        <p style={{ margin: '0 0 10px 0', fontWeight: 'bold', color: '#60a5fa' }}>{activeRecipe.desc}</p>
                        <p style={{ margin: 0, fontStyle: 'italic', color: '#bfdbfe', fontSize: '0.95em' }}>
                            "💡 {activeRecipe.explanation}"
                        </p>
                    </div>
                )}
            </div>

            <div className="table-container">
                {/* Top-Left Empty Corner */}
                <div style={{ marginRight: '10px' }}></div>

                {/* Column Headers */}
                {groups.map(g => (
                    <div key={`header-${g.id}`} style={{
                        textAlign: 'center',
                        marginBottom: '10px',
                        color: g.color,
                        fontWeight: 'bold',
                        fontSize: '0.9em',
                        borderBottom: `2px solid ${g.color}40`,
                        paddingBottom: '5px'
                    }}>
                        {g.name}
                    </div>
                ))}
                {renderGrid()}
            </div>

            {activeElement && (
                <div className="active-element-info" style={{
                    marginTop: '20px',
                    padding: '24px',
                    border: `1px solid ${getGroupColor(activeElement.group)}`,
                    borderRadius: '12px',
                    background: 'rgba(15, 23, 42, 0.95)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                    textAlign: 'left'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px', borderBottom: `1px solid ${getGroupColor(activeElement.group)}40`, paddingBottom: '15px' }}>
                        <div style={{
                            width: '50px',
                            height: '50px',
                            background: getGroupColor(activeElement.group),
                            color: '#000',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5em',
                            fontWeight: 'bold',
                            borderRadius: '8px'
                        }}>
                            {activeElement.symbol}
                        </div>
                        <div>
                            <h3 style={{ margin: 0, color: getGroupColor(activeElement.group), fontSize: '1.8em' }}>{activeElement.name}</h3>
                            <small style={{ color: '#94a3b8' }}>
                                Group: {groups.find(g => g.id === activeElement.group)?.name} | Row: {rows.find(r => r.id === activeElement.row)?.name}
                            </small>
                        </div>
                    </div>

                    <p style={{ fontSize: '1.2em', marginBottom: '20px' }}>{activeElement.desc}</p>

                    {activeElement.audit && (
                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <h4 style={{ marginTop: 0, color: '#ffbd2e', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span>🛡️</span> Enterprise Audit Checklist
                            </h4>

                            <div style={{ marginBottom: '15px' }}>
                                <strong style={{ color: '#e2e8f0', display: 'block', marginBottom: '5px' }}>📋 Inventory & Audit:</strong>
                                <span style={{ color: '#94a3b8' }}>{activeElement.audit.question}</span>
                            </div>

                            <div style={{ marginBottom: '15px' }}>
                                <strong style={{ color: '#ff6b6b', display: 'block', marginBottom: '5px' }}>🔒 Security Control:</strong>
                                <span style={{ color: '#94a3b8' }}>{activeElement.audit.security}</span>
                            </div>

                            <div>
                                <strong style={{ color: '#4ecdc4', display: 'block', marginBottom: '5px' }}>⚖️ Compliance & Governance:</strong>
                                <span style={{ color: '#94a3b8' }}>{activeElement.audit.compliance}</span>
                            </div>

                            <div style={{ marginTop: '15px', paddingTop: '10px', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8em', color: '#666', fontStyle: 'italic' }}>
                                Source: IBM AI Periodic Table Framework Audit Protocol
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default PeriodicTable;
