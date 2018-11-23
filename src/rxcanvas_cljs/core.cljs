(ns rxcanvas-cljs.core
    (:refer-clojure :exclude [atom])
    (:require [glue.core :as g :refer [atom]]))

(enable-console-print!)

(defn draw
  [radius canvas]
  (let [canvas-dim (* 2 radius)]
    ;; resize canvas
    (set! (.-width canvas) canvas-dim)
    (set! (.-height canvas) canvas-dim)

    ;; draw the shape
    (let [ctx (.getContext canvas "2d")
          center-x (/ (.-width canvas) 2)
          center-y (/ (.-height canvas) 2)]
      (set! (.-fillStyle ctx) "rgb(0,0,0")
      (.clearRect ctx 0 0 (.-width canvas) (.-height canvas))
      (.beginPath ctx)
      (.arc ctx center-x center-y radius 0, (* 2 (.-PI js/Math)) false)
      (.fill ctx)
      (.stroke ctx))))

(g/defcomponent
  :rxcanvas
  {:template "#rxcanvas"
   :state (fn [] {:size (atom 10)})
   :methods {:draw-dot (fn [this state _]
      ;; update the state
      (swap! (:size state) #(identity (.-value (.querySelector js/document "#size"))))
      ;; grab the new value and the canvas for drawing
      (draw @(:size state) (.querySelector js/document "#rx"))
      )}})

(defonce app (g/vue {:el "#app"}))

(defn on-js-reload []
  (g/reset-state!))
