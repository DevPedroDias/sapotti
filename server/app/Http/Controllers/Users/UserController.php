<?php

namespace App\Http\Controllers\Users;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use App\Models\User;

class UserController extends BaseController
{


    public function __construct(Request $request)
    {
        $data = json_decode($request->getContent(), true);

        $this->name     = $data['name'] ?? null;
        $this->email    = $data['email'] ?? null;
        $this->password = $data['password'] ?? null;
        $this->status   = $data['status'] ?? null;
        $this->type     = $data['type'] ?? null;
    }
    public function create()
    {
        if ($this->checkUniqueEmail()) {
            $user = new User();
            $user->name = $this->name;
            $user->email = $this->email;
            $user->password = bcrypt($this->password);
            $user->status = $this->status;
            $user->type = $this->type;
            $user->save();
            return response()->json(["status" => true, "message" => "User created!"]);
        } else {
            return response()->json(["status" => false, "message" => "Email already exists!"]);
        }
    }

    public function update($id)
    {

        $user = User::find($id)->first();
        $user->name = $this->name;
        $user->email = $this->email;

        if (!empty($this->password))
            $user->password = bcrypt($this->password);

        $user->status = $this->status;
        $user->type = $this->type;
        $user->update();
        return response()->json(["status" => true, "message" => "User updated!"]);
    }
    public function delete($id)
    {
        $user = User::find($id)->first();
        $user->status = 2;
        $user->update();
        return response()->json(["status" => true, "message" => "User deleted!"]);
    }
    public function list()
    {
        $users = User::where(["status" => 1])->get();
        $resp = collect($users->toArray())->except(['password']);
        return response()->json($resp);
    }
    public function getUser($id)
    {
        $user = User::find($id);
        return response()->json($user);
    }
    private function checkUniqueEmail()
    {
        $user = User::where(['email' => $this->email])->first();
        $response = empty($user) ? true : false;
        return $response;
    }
}
