import { IFrameHW } from "../../pages/IframeHW"

describe('IFRAMEHW', () => {
    beforeEach(() => {
        IFrameHW.visit();
      });
    it('test iframe 1', () => {
        IFrameHW.getIframe()
    });
});