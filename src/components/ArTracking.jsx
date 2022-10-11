import React from 'react'

function ArTracking() {
  return (
    <>
      <div className=''>
        <a-scene
            vr-mode-ui='enabled: false;'
            renderer="logarithmicDepthBuffer: true; precision: medium;"
            embedded arjs='trackingMethod: best; sourceType: webcam; debugUIEnabled: false;'>
            {/* <!-- use rawgithack to retrieve the correct url for nft marker (see 'pinball' below) --> */}
            <a-nft
                type='nft' url='../../trex/trex-image/trex'
                smooth='true' smoothCount='10' smoothTolerance='0.01' smoothThreshold='5'>
                <a-entity
                    gltf-model='../../trex/scene.gltf'
                    scale="5 5 5"
                    position="0 0 0"
                    >
                </a-entity>
            </a-nft>
          <a-entity camera></a-entity>
        </a-scene>
      </div>
    </>
  )
}

export default ArTracking