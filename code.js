var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__);
figma.ui.postMessage({ type: 'networkRequest' });
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    const text = figma.createText();
    // Make sure the new text node is visible where we're currently looking
    text.x = figma.viewport.center.x;
    text.y = figma.viewport.center.y;
    yield figma.loadFontAsync(text.fontName);
    text.characters = msg;
    figma.closePlugin();
});
