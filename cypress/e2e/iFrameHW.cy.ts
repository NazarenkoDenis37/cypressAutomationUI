import { IFrameHW } from "../../pages/IframeHW"

describe('IFRAMEHW', () => {
    beforeEach(() => {
        IFrameHW.visit();
      });
    it('test iframe 1', () => {
        IFrameHW.getIframe1()
    });
    it('test iframe 2', () => {
        IFrameHW.getIframe2()
    });
    it('test iframe 3', () => {
        IFrameHW.getIframe3()
    });
    it('test iframe 4', () => {
        IFrameHW.getIframe4
    });
    it('test iframe with extension 1', () => {
        IFrameHW.getIframeExt1()
    });
    it('test iframe with extension 2', () => {
        IFrameHW.getIframeExt2
    });
    it('test iframe with extension 3', () => {
        IFrameHW.getIframeExt3()
    });
});