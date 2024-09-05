import React from 'react'

const Gumroad = () => {
  return (
    <div className="w-full max-w-md mt-12">
      <form
        className="flex flex-col gap-4"
        action="https://app.gumroad.com/follow_from_embed_form"
        method="post"
        id="gumroad-follow-form-embed"
      >
        <input type="hidden" name="seller_id" value="4044817041577" />
        <input
          id="gumroad-follow-form-embed-input"
          type="email"
          placeholder="Your email address"
          name="email"
          className="p-2 border border-black rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-0"
        />
        <button
          className="p-2 border border-black text-white rounded-md hover:bg-white hover:text-black transition-colors"
          type="submit"
          id="gumroad-follow-form-embed-button"
        >
          Follow
        </button>
      </form>
    </div>
  )
}

export default Gumroad
