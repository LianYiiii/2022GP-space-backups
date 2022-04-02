import { createContext } from 'react'

const commentContext = createContext();

export const ConProvider = commentContext.Provider;
export const ConConsumer = commentContext.Consumer;