// Render main content (header + chat area)
function renderMainContent() {
    return `
        <main class="main-content">
            <header class="header">
                <div class="header-top">
                    <div class="header-controls">
                        <button id="compareBtn" class="control-btn compare-btn" onclick="toggleCompare()">
                            <i class="fas fa-exchange-alt"></i>
                            <span>Compare</span>
                        </button>
                        
                        <div id="singleModelView">
                            <button class="control-btn model-btn" onclick="showModelModal()">
                                <span id="modelIcon">🟣</span>
                                <div style="text-align: left;">
                                    <div style="font-size: 12px; color: #94a3b8;">AI Model</div>
                                    <div id="modelName" style="font-size: 12px; font-weight: 500;">Claude Sonnet 4.5</div>
                                </div>
                            </button>
                        </div>
                        
                        <div id="compareModelView" class="hidden" style="display: flex; gap: 8px; align-items: center;">
                            <button class="control-btn model-btn" onclick="showModelModal()">
                                <span id="modelAIcon">🟣</span>
                                <div style="font-size: 12px;" id="modelAName">Claude</div>
                            </button>
                            <span style="color: #64748b; font-size: 12px; font-weight: 700;">vs</span>
                            <button class="control-btn model-btn" onclick="showModelModal()">
                                <span id="modelBIcon">🟢</span>
                                <div style="font-size: 12px;" id="modelBName">GPT-4</div>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            
            ${renderChatArea()}
        </main>
    `;
}